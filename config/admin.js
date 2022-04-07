module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2dfa3f1a40e3d8d21a6f214aad0beee5'),
  },
});
