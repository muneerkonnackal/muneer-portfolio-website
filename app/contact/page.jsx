"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { SelectGroup } from "@radix-ui/react-select";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 8590573039",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "muneermon0211@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Konnackal House , Pathanamthitta, Kerala",
  },
];


const Contact = () => {

  // emailjs service
  const form = useRef();
  const [selectedService, setSelectedService] = useState(""); 

  const sendEmail = (e)=>{
    e.preventDefault();

    emailjs
      .sendForm('service_0t9hulf', 'template_mmpwvs9', form.current, {
        publicKey: 'dBRvKn3TZx_wyyaa2',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
      setSelectedService("");
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form 
            ref={form}
            onSubmit={sendEmail}
             className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I’m excited to collaborate and bring ideas to life.
                let's connect and create something great together!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" name="first_name" placeholder="Firstname" />
                <Input type="lastname" name="last_name" placeholder="Lastname" />
                <Input type="email" name="email" placeholder="Email Address" />
                <Input type="phone" name="phone" placeholder="Phone" />
              </div>
              {/* select */}
              <Select name="service" value={selectedService} onValueChange={(value) => setSelectedService(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem  value="Web Development">Web Development</SelectItem>
                    <SelectItem   value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem  value="Logo Design">Logo Design</SelectItem>
                    <SelectItem  value="SEO">SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* text area */}
              <Textarea className="h-[200px]" name="message" placeholder="Type your message here."
              />
              {/* btn */}
              <Button type="submit" size="md" className="max-w-40">Send message</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index)=>{
                return(
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center  ">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
