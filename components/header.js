import React from "react";
import styles from '../styles/Home.module.css';
import Image from "next/image";
import trainLogo from '../assets/headerLogo.png'

export default function Logo(){
    return(
        <Image
         src={trainLogo}
         height='100'
        />
    )
}
