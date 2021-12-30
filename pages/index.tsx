import type {NextPage} from 'next'
import {Box, Container} from '@mui/material'
import {ContactCard} from '../components/contact-card'

const Home: NextPage = () => {
  return (
      <Container>
        <Box sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <ContactCard/>
        </Box>
      </Container>
  )
}

export default Home
