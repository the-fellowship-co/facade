import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import CheckIcon from '@material-ui/icons/Check'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Layout from '@theme/Layout'
import { green, red } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  successIcon: {
    margin: theme.spacing(1),
    backgroundColor: green[400],
  },
  apiKeyBlock: {
    width: 300,
    textAlign: 'center',
    fontWeight: 'bold'
  },  
  codeBlock: {
    width: 300,
    marginTop: theme.spacing(2),
  },
  subContent: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    color: red[400]
  }
}))

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`Copyright © ${new Date().getFullYear()} The Fellowship Co`}
    </Typography>
  )
}

function SuccessContent({email, apiKey}) {
  const classes = useStyles()
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.successIcon}>
          <CheckIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Success
        </Typography>
        <div className={classes.subContent}>
          <Typography component="h7" variant="body1">
              Your account has been created successfully
          </Typography>
          <code className={classes.apiKeyBlock}>Your API Key: {apiKey}</code>
        </div>

        <div className={classes.subContent}>
          <Typography component="h7" variant="body1">
            You are all set to start using byld! Use <code>byld login</code> to authenticate and byld your first project:
          </Typography>
          <code className={classes.codeBlock}>
            <div>$ byld login</div>
            <div>Your email: {email}</div>
            <div>Your token: {apiKey}</div>
          </code>
        </div>

        <div className={classes.subContent}>
          <Typography component="h7" variant="body1">
            A copy of these instructions along with the API key has been sent to your email <code>{email}</code>
          </Typography>
        </div>
      </div>
    </Container>
  )
}

export default function SignUp() {
  const classes = useStyles()
  const [userDetails, setUserDetails] = useState({})
  const [userCreated, setUserCreated] = useState({})
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setUserDetails({...userDetails, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        'http://api.letsbyld.com/users',
        {
          method: 'POST',
          headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-user-email': userDetails.email,
            'x-user-token': '7B9BbsH2wqNG-zLSHzfp'
          }),
          body: JSON.stringify({user: userDetails})
        }
      )
      const responseJson = await response.json()
      if(response.status === 200) {
        setUserCreated(responseJson)
        setError(null)
      } else {
        setError(responseJson.error)
      }
    } catch(e) {
      setError('There was an error processing your request. Please try again.')
    }
  }

  return (
    <Layout>
      {!userCreated.authenticationToken && <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  onChange={handleChange}
                  variant="outlined"
                  required                  
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  onChange={handleChange}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  autoComplete="email"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          </form>
          {error && <div className={classes.error}>{error}</div>}
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>}
      {userCreated.authenticationToken && <SuccessContent email={userCreated.email} apiKey={userCreated.authenticationToken} />}      
    </Layout>
  )
}