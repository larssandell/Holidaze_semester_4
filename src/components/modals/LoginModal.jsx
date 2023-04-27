import { Box, Button } from '@mui/material';
import TextFields from './form/TextFields';
import { useForm } from 'react-hook-form';

function LoginModal() {
    const { handleSubmit, control } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Box
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            sx={{ width: '100%', mt: '2rem' }}
        >
            <TextFields control={control} name='email' required label='Email' />
            <TextFields
                control={control}
                required
                name='password'
                label='Password'
            />
            <Button
                type='submit'
                fullWidth
                sx={{ mt: 2, mb: 2 }}
                variant='outlined'
            >
                Login
            </Button>
        </Box>
    );
}

export default LoginModal;
