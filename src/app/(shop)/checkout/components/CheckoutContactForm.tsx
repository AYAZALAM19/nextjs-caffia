    'use client'
    import { P } from 'framer-motion/dist/types.d-Cjd591yU';
    import React, { useState } from 'react';
    import {useForm} from 'react-hook-form';

    type CheckoutFormData = {
        email: string,
        name: string,
        phone: string,
        address: string,
        city?: string,
        pincode: string,
    }

    export default function CheckoutContactForm() {
        const {
            register,
            handleSubmit,
            formState:{errors}} = useForm<CheckoutFormData>()

        function OnSubmit(data:CheckoutFormData){
            console.log('Form submited data',data)
        }
    return (
        <div className='w-full'>
            <p>Address</p>
            <form onSubmit={handleSubmit(OnSubmit)} className=' space-y-3.5 ' >

                <input type="text" placeholder='Enter you Email'
                {...register('email',
                    {
                        required:'Email is required',
                        pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message:'Invalid email address',
                    }})}
                />
                {errors.email && <p className='text-red-700 font-bold'>{errors.email.message}</p>}

                <input type="text"
                placeholder='Full Name'
                {...register('name',{required:'Name is required'})}
                />
                {errors.name && <p className='text-red-700 font-bold'>{errors.name.message}</p>}

                <input
                placeholder='Phone'
                type='text'
                {...register('phone',{
                    required: 'Phone Number is required',
                    minLength:{value:10, message:'Phone number should ne 10 deigits long'},
                })}
                />
                {errors.phone && <p className='text-red-700 font-bold'>{errors.phone.message}</p>}

                <input 
                type='text'
                placeholder='Address'
                {...register('address',{
                    required:'Address is required',
                })}
                />
                {errors.address && <p className='text-red-700 font-bold'>{errors.address.message}</p>}

                <input type="text"
                placeholder={'pincode'}
                {...register('pincode',
                    {
                        required:'Pincode is required',
                        minLength:{value:6, message:'Pincode should be 6 digits long'}, 
                    }
                )} />
                {errors.pincode && <p className='text-red-700 font-bold'>{errors.pincode.message}</p>}

                <button type="submit" className="bg-caffia text-white px-4 py-2 rounded">
            Continue to Payment
        </button>
            </form>
        </div>
    )
    }
