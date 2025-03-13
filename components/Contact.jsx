import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'



const Contact = () => {

    const formSchema = z.object({
        name: z.string().min(2, {
            message: "Name must be at least 2 characters.",
            required_error: "Please Enter Your Name",
        },

        ),
        email: z.string().email({
            message: "Please enter a valid email address.",
            required_error: "Please Enter Your Email",
        }),
        message: z.string().min(10, {
            message: "Message must be at least 10 characters.",
            required_error: "Please Enter Your Message",
        }),
    })

    const form = useForm({
        
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    const { register, handleSubmit } = useForm();




    // 2. Define a submit handler.
    async function onSubmit(values) {
    console.log(values);
    const response = await fetch("/api/sheets", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json',
          },
    })

    }



    return (
        <div className="max-w-5xl mx-auto h-screen flex-col items-center justify-center mt-10 ">
            <h1 className="font-Ovo text-3xl text-center">Contact Me </h1>
    
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div className='flex flex-row gap-4 items-center justify-center '>
                        {/* <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => ( */}
                                <FormItem >
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Your Name" className="w-[300px] "{...register("name")} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            {/* // )}
                        /> */}

                        {/* <FormField
                            control={form.control}
                            name="email"
                         
                            render={({ field }) => ( */}
                                <FormItem  > 
                                    <FormLabel >Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" id="email" placeholder="Email" className="w-[300px]" {...register("email")}  />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            {/* )}
                        /> */}
                    </div>
                    <div className="w-[600px] gap-1.5 justify-center items-center mx-auto">
                    {/* <FormField
                            control={form.control}
                            name="messsage"
                            render={({ field }) => ( */}
                                <FormItem>
                                    <FormLabel >Your message</FormLabel>
                                    <FormControl>
                                    <Textarea placeholder="Type your message here." id="message" {...register("message")}  />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            {/* )}
                        /> */}

                    </div>
                    <div className='flex items-center justify-center'>
                        <Button type="submit" >Submit</Button>
                    </div>
                </form>
            </Form>



        </div>
    )

}

export default Contact

//https://dev.to/solomon04/collect-form-submissions-with-nextjs-google-sheets-264j