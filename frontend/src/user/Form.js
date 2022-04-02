import { useState } from 'react'
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'
import { styled } from '@mui/system';

const Title = styled('h2')({
  margin: '0.5rem'
})

export default ({ onSubmit, activityOptions }) => {
  const [name, setName] = useState('')
  const [accessibility, setAccessibility] = useState(null)
  const [price, setPrice] = useState(null)

  const onSubmitForm = () => {
    onSubmit({ name, accessibility, price })
  }

  const onKeyDown = (e) => {
    if(e.keyCode == 13){
      onSubmitForm()
    }
  }

  return (
    <form onSubmit={onSubmitForm}>
      <Grid container justifyContent='center' spacing={2}>
        <Grid item>
          <Title>Create User</Title>
        </Grid>
        <Grid item xs={12}>
          <TextField 
            label="Name" 
            variant="outlined" 
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={onKeyDown}
            fullWidth 
          />
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="accessibility-select-label">Accessibility</InputLabel>
            <Select
              labelId="accessibility-select-label"
              value={accessibility}
              label="Accessibility"
              onChange={e => setAccessibility(e.target.value)}
            >
              {activityOptions.accessibility.map(name => (
                <MenuItem key={name} value={name}>{name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="price-select-label">Price</InputLabel>
            <Select
              labelId="price-select-label"
              value={price}
              label="Price"
              onChange={e => setPrice(e.target.value)}
            >
              {activityOptions.price.map(name => (
                <MenuItem key={name} value={name}>{name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item>
          <Button variant="contained" onClick={onSubmitForm}>Create</Button>
        </Grid>
      </Grid>
    </form>
  )
}
