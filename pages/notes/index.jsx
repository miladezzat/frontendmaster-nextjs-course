import React from 'react';
import Link from 'next/link';


const Page = () => {
    const notes = new Array(15).fill(1).map((e, i)=>({id: i, title: `Note: #${i}`}))
    return (
        <div>
            <h1>notes index path</h1>
            {notes.map((note)=>(<Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
                <a>{note.title}</a>
            </Link>))}
        </div>
    );
};


export default Page;