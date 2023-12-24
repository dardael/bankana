import File from 'bankana/components/file.tsx';
export default function Home() {
    return (
        <File
            placeholder="Déposer le relevé de compte à analyser ici"
            fileType=".csv"
        />
    );
}
