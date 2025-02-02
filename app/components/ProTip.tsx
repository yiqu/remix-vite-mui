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


export default function ProTip() {
  return (
    <Stack>
      <Box>box</Box>
      <Typography variant='h1'>h111</Typography>
      <Typography variant='h2'>h2</Typography>
      <Typography variant='h3'>h3</Typography>
      <Typography variant='h4'>h4</Typography>
      <Typography variant='h5'>h5</Typography>
      <Typography variant='h6'>h6</Typography>
      <Link to={`/about`}>About</Link>
      <TextField />
      <TextField />
      <TextField />
      <TextField />
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
