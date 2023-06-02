import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GenForm from "./GenForm";

export default function Generador({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-bold text-4xl text-gray-800 leading-tight">
                    Generador de texto
                </h2>
            }
            dark={false}
        >
            <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <GenForm></GenForm>
            </main>
        </AuthenticatedLayout>
    );
}
