export const config = {
  apiUrl: process.env.API_URL || 'https://kids-api.twreporter.org/api/graphql',
  baseUrl: process.env.BASE_URL || 'https://kids.twreporter.org/',
  bucketName: process.env.BUCKET_NAME || 'kids-storage.twreporter.org',
  slackWebhook: process.env.SLACK_WEBHOOK || 'SLACK_WEBHOOK_URL',
  rssFileName: process.env.RSS_FILE_NAME || 'rss.xml',
  rss: {
    title: '少年報導者 The Reporter for Kids - 理解世界 參與未來',
    description:
      '《少年報導者》是由非營利媒體《報導者》針對兒少打造的深度新聞報導品牌，與兒童和少年一起理解世界，參與未來。',
    language: 'zh-tw',
    image_url: 'https://kids-storage.twreporter.org/logo.png',
  },
  gcs: {
    projectId: process.env.PROJECT_ID || '',
    keyFilename: process.env.KEY_FILENAME || '',
  },
}
