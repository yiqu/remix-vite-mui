import {
  SvgIconProps,
  SvgIcon,
  Typography,
  Stack,
  Box,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Chip,
  Alert,
} from "@mui/material";
import { Link } from "@remix-run/react";
import CheckIcon from "@mui/icons-material/Check";

function LightBulbIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d='M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z' />
    </SvgIcon>
  );
}

export default function ProTip() {
  return (
    <Stack>
      <LightBulbIcon />
      <Box>box</Box>
      <Typography variant='h1'>h1</Typography>
      <Typography variant='h2'>h2</Typography>
      <Typography variant='h3'>h3</Typography>
      <Typography variant='h4'>h4</Typography>
      <Typography variant='h5'>h5</Typography>
      <Typography variant='h6'>h6</Typography>
      <Link to={`/about`}>About</Link>
      <TextField />
      <FormControl>
        <FormLabel id='demo-radio-buttons-group-label'>Gender</FormLabel>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='female'
          name='radio-buttons-group'
        >
          <FormControlLabel value='female' control={<Radio />} label='Female' />
          <FormControlLabel value='male' control={<Radio />} label='Male' />
          <FormControlLabel value='other' control={<Radio />} label='Other' />
        </RadioGroup>
      </FormControl>
      <Chip label='Chip Filled' />
      <Chip label='Chip Outlined' variant='outlined' />
      <Alert icon={<CheckIcon fontSize='inherit' />} severity='success'>
        Here is a gentle confirmation that your action was successful.
      </Alert>
    </Stack>
  );
}
