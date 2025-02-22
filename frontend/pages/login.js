import React, { useState } from 'react'
import styles from '../styles/apply.module.css'
import Footer from '../components/Footer'
import {toast} from 'react-toastify';
import Link from 'next/link'
import { useRouter } from 'next/router';

const Apply = () => {

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e)=>{
        e.preventDefault();
        // backend here
        fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => res.json())
        .then(data=>{
            if(data.status==='success'){
                toast('You are Logged in')
                localStorage.setItem('LinkTreeToken', data.token);
                router.push('/dashboard');
            }
            if(data.status === 'not found'){
                toast.error('User not found');
            }
        }).catch(err=>{
            console.log(err);
        })
    }
    return (
        <>
        <section className={styles.background + " min-h-screen flex justify-center items-center"}>
            <div className="main">
                <div className="content bg-white border-2 px-4 py-8 rounded-2xl shadow-lg">
                <h1 className="text-2xl font-bold text-center">You're now among top creators</h1>
                <p className='text-center'>Access your Dashboard</p>
                <p className='text-center py-5 font-bold text-green-800'>Login here</p>
                <form onSubmit={handleLogin} className='flex flex-col gap-4 text-lg mt-5'>
                    <span className='flex flex-row shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                    <img className='w-4 mr-2' src="/svg/email.svg" alt="" />
                    <input value={email} onChange={e=>setEmail(e.target.value)} className='focus:outline-none' type="email" placeholder="Email" required/>
                    </span>
                    <span className='flex flex-row shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                    <img className='w-5 mr-2' src="/svg/pass.svg" alt="" />
                    <input value={password} onChange={e=>setPassword(e.target.value)} className='focus:outline-none' type="password" placeholder='password' required/>
                    </span>
                    <input className='bg-indigo-600 text-white py-2 rounded-lg cursor-pointer' type="submit" value="Login" />
                </form>
                </div>
                <h4 className='text-center text-white pt-3'>New Here? <Link className='font-bold text-red-400' href="/apply">Apply</Link></h4>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Apply