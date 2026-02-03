const cron = require('node-cron');
const userModel = require('../models/userModel');
const { sendEmail } = require('../utils/emailService');

const initCronJobs = () => {
  console.log('Initializing cron jobs...');

  // Run every day at midnight
  cron.schedule('0 0 * * *', async () => {
    console.log('Running daily package check...');
    await checkExpiringPackages();
    await checkExpiredPackages();
  });
  
  // Also run immediately on startup for dev/testing purposes (optional, maybe just log)
  // checkExpiringPackages();
  // checkExpiredPackages();
};

const checkExpiringPackages = async () => {
  try {
    const users = await userModel.getExpiringUsers();
    console.log(`Found ${users.length} users with expiring packages.`);

    for (const user of users) {
      const subject = 'Your Bloom Audit Package is Expiring Soon!';
      const text = `Hello ${user.name},\n\nYour subscription to the ${user.package_name} package is expiring on ${new Date(user.package_end_date).toDateString()}. Please renew or upgrade your plan to avoid interruption.\n\nBest regards,\nBloom Audit Team`;
      
      await sendEmail(user.email, subject, text);
      await userModel.markWarningSent(user.id);
    }
  } catch (error) {
    console.error('Error checking expiring packages:', error);
  }
};

const checkExpiredPackages = async () => {
  try {
    const users = await userModel.getExpiredUsers();
    console.log(`Found ${users.length} users with expired packages.`);

    for (const user of users) {
      await userModel.markUserExpired(user.id);
      console.log(`Marked user ${user.id} as expired.`);
    }
  } catch (error) {
    console.error('Error checking expired packages:', error);
  }
};

module.exports = { initCronJobs };
