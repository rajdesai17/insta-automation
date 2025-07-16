import { Box, Typography, Card, CardMedia, Avatar } from '@mui/material';

const PreviewPhone = () => (
  <Box
    sx={{
      width: 300,
      height: 600,
      border: '16px solid #222',
      borderRadius: '36px',
      position: 'relative',
      background: '#111',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      p: 2,
    }}
  >
    <Typography variant="subtitle2" color="white" sx={{ mb: 1 }}>BOTSPACEHQ</Typography>
    <Card sx={{ width: '100%', mb: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image="/assets/react.svg"
        alt="Preview"
      />
    </Card>
    <Box sx={{ color: 'white', fontSize: 12 }}>
      <Box display="flex" alignItems="center" gap={1}>
        <Avatar sx={{ width: 24, height: 24 }} />
        <Typography variant="body2" color="white">botspacehq</Typography>
      </Box>
      <Typography variant="body2" color="white" sx={{ mt: 1 }}>
        WhatsApp now connects 3 billion users, a milestone reflecting its influence in messaging. Thanks to Meta's strides in AI and business tools, WhatsApp not only enhances personal communication but also empowers businesses with robust AI features.
      </Typography>
    </Box>
  </Box>
);

export default PreviewPhone; 