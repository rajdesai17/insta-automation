import { Box, Typography, Radio, Button, Card, CardMedia, Chip, FormControlLabel, RadioGroup } from '@mui/material';
import { useState } from 'react';

const posts = [
  { id: 1, img: '/assets/react.svg' },
  { id: 2, img: '/assets/react.svg' },
  { id: 3, img: '/assets/react.svg' },
];

const PostSelector = () => {
  const [selected, setSelected] = useState('specific');
  return (
    <Box>
      <Typography variant="h6" gutterBottom>When someone comments on</Typography>
      <Box display="flex" gap={2} mb={2}>
        {posts.map(post => (
          <Card key={post.id} sx={{ width: 80, height: 80, border: selected === 'specific' ? '2px solid #1976d2' : '1px solid #eee' }}>
            <CardMedia component="img" image={post.img} alt={`Post ${post.id}`} sx={{ width: '100%', height: '100%' }} />
          </Card>
        ))}
      </Box>
      <RadioGroup value={selected} onChange={e => setSelected(e.target.value)}>
        <FormControlLabel value="specific" control={<Radio />} label="a specific post or reel" />
        <FormControlLabel value="any" control={<Radio />} label={<><span>any post or reel</span> <Chip label="PRO" size="small" color="primary" /></>} />
        <FormControlLabel value="next" control={<Radio />} label={<><span>next post or reel</span> <Chip label="PRO" size="small" color="primary" /></>} />
      </RadioGroup>
      <Button variant="contained" sx={{ mt: 2 }}>Next</Button>
    </Box>
  );
};

export default PostSelector; 