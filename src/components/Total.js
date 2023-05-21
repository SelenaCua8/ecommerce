import { ClassNames } from '@emotion/react'
import React from 'react'
import accounting from 'accounting'

const useStyles = makeStyles((theme) =>({

    root:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20vh',
    },

    button: {
        marginTop: '2rem',
        },

}))

const Total = () => {
    const classes = useStyles()
  return (
    <div className={ClassNames.root}>
        <h5>Total tiems: 3</h5>
        <h5>{accounting.formatMonry(50, '$')}</h5>
        <Button className={ClassNames.button} variant='contained' color='secondary'>Check out</Button>
     </div>
  )
}

export default Total