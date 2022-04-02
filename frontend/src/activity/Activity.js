import { Stack } from '@mui/material'
import { styled } from '@mui/system';

const Item = styled('div')({
  padding: '0.5rem 0 0.5rem',
});

const Title = styled(Item)({
  fontWeight: 'bold'
})

export default ({ activity, accessibility, type, participants, price, link }) => {
  return (
    <Stack>
      <Title>{activity}</Title>
      <Item>Accessibility: {accessibility}</Item>
      <Item>Type: {type}</Item>
      <Item>Participants: {participants}</Item>
      <Item>Price: {price}</Item>
      {link && (
        <Item>Link: {link}</Item>
      )}
    </Stack>
  )
}