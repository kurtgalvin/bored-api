import { Stack } from '@mui/material'
import { styled } from '@mui/system';

const Item = styled('div')({
  padding: '0.5rem 0 0.5rem',
});

const Title = styled(Item)({
  fontWeight: 'bold'
})

export default ({ name, accessibility, price }) => {
  return (
    <Stack>
      <Title>{name}</Title>
      <Item>Accessibility: {accessibility}</Item>
      <Item>Price: {price}</Item>
    </Stack>
  )
}