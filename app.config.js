import "dotenv/config";

export default {
  expo: {
    extra: {
      ApiKey: process.env.API_KEY,
      AuthDomain: process.env.AUTH_DOMAIN,
      ProjectId: process.env.PROJECT_ID,
      StorageBucket: process.env.STORAGE_BUCKET,
      MessagingSenderId: process.env.MESSAGING_SENDER_ID,
      AppId: process.env.APP_ID,
      MeasurementId: process.env.MEASUREMENT_ID,
    },
  },
};
