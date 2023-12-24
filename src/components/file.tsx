'use client';

import React from 'react';
import { Input } from '@chakra-ui/react';

export default function File({
    fileType,
    placeholder,
}: {
    fileType: string;
    placeholder: string;
}) {
    async function handleFileUpload(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        if (!event.target.files || event.target.files.length === 0) {
            return; // User canceled file selection
        }

        const file = event.target.files[0];

        await fetch('/api/account', {
            method: 'POST',
            body: file,
            headers: {
                'Content-Type': file.type,
            },
        });
    }

    return <Input type="file" onChange={handleFileUpload} accept={fileType} />;
}
