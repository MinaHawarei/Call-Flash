import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import { motion } from 'framer-motion';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Log in" />

            <div className="flex min-h-screen items-center justify-center bg-[#FDFDFC] p-6 text-[#1b1b18] dark:bg-[#0a0a0a] transition-colors duration-300">
                <div className="flex w-full items-center justify-center lg:grow">
                    <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row">

                        {/* 🟢 Left Side (Form) */}
                        <div className="flex-1 rounded-br-lg rounded-bl-lg
                            bg-[#f4f4f4]
                            p-6 pb-12
                            shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.08)]
                            lg:rounded-tl-lg lg:rounded-br-none lg:p-20
                            dark:bg-[#1d1d1d]
                            dark:text-[#EDEDEC]
                            dark:shadow-[inset_0px_0px_0px_1px_#fffaed1a]">

                            <h1 className="mb-6 text-xl font-medium">Log in to your account</h1>

                            <form className="flex flex-col gap-6" onSubmit={submit}>
                                <div className="grid gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            placeholder="email@example.com"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            required
                                            tabIndex={2}
                                            autoComplete="current-password"
                                            value={data.password}
                                            onChange={(e) => setData('password', e.target.value)}
                                            placeholder="Password"
                                        />
                                        <InputError message={errors.password} />
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Checkbox
                                            id="remember"
                                            name="remember"
                                            checked={data.remember}
                                            onClick={() => setData('remember', !data.remember)}
                                            tabIndex={3}
                                        />
                                        <Label htmlFor="remember">Remember me</Label>
                                    </div>

                                    <Button type="submit" className="mt-4 w-full" tabIndex={4} disabled={processing}>
                                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                        Log in
                                    </Button>
                                </div>

                                <div className="text-center text-sm text-muted-foreground">
                                    Don't have an account?{' '}
                                    <TextLink href={route('register')} tabIndex={5}>
                                        Sign up
                                    </TextLink>
                                </div>
                            </form>

                            {status && (
                                <div className="mt-4 text-center text-sm font-medium text-green-600">{status}</div>
                            )}
                        </div>

                        {/* 🟣 Right Side (Logo & Team) */}
                        <div className="relative aspect-[335/376] w-full shrink-0 overflow-hidden rounded-t-lg bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800 lg:mb-0 lg:-ml-px lg:aspect-auto lg:w-[438px] lg:rounded-t-none lg:rounded-r-lg dark:bg-[#1D0002]">
                            <div className="relative flex h-full w-full items-center justify-center">
                                <div className="flex items-center">
                                    <motion.div
                                        initial={{ x: -40, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 1.0, duration: 1.0, type: "spring" }}
                                        whileHover={{ scale: 1.05, rotate: 2 }}
                                    >
                                        <img
                                            src="/images/we-logo-w.png"
                                            alt="WE Logo"
                                            className="h-24 w-auto transition-all duration-300 hover:rotate-3 hover:scale-105"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: "60px" }}
                                        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                                        className="mx-4 w-0.5 bg-white"
                                    />

                                    <motion.span
                                        initial={{ x: 40, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 1.5, duration: 1.0, type: "spring" }}
                                        className="text-2xl font-bold text-white"
                                    >
                                        TechLead Team
                                        <br />
                                        <span className="text-xs font-normal text-gray-300">
                                            Developed by: Mina Hawarei
                                        </span>
                                    </motion.span>
                                </div>
                            </div>

                            <div className="absolute inset-0 rounded-t-lg shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-t-none lg:rounded-r-lg dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]" />
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
