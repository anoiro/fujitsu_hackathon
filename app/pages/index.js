import Link from 'next/link';
import React from 'react';

const Home = () =>(
<div>
    <h1>Next.js</h1>
    <div>welcome to Next.js</div>
    <div>
    <Link href="/register">
    <a>Go to Register &gt;&gt;</a>
    </Link>
    </div>
</div>
);export default Home;