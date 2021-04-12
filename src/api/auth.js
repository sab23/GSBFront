import React from 'react'
//import '.login'
import jsonwebtoken from 'jsonwebtoken'
//import {getToken} from '../../api/auth.js'
import Login from '../components/loginForm/login'
import Non from '../views/Non'

export const getToken = async (user) => {
    try{
        let response = await fetch('http://localhost:3002/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',   
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        let {token} = await response.json()
        let decoded = jsonwebtoken.verify(token, 'ppe')
        return {decoded, token} 
    } catch (error){
        console.log(error)
    }
}
