import { CartContext } from "@/components/context/indext";
import { ShopLayout } from "@/components/layouts";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
};

const AddressPage = () => {
  const router = useRouter();
  const { updateAddress } = useContext(CartContext);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      firstName: Cookies.get('firstName') || '',
      lastName: Cookies.get('lastName') || '',
      email: Cookies.get('email') || '',
      phone: Cookies.get('phone') || '',
      address: Cookies.get('address') || '',
      zip: Cookies.get('zip') || '',
    }
  });

  const onSubmitAddress = (data: FormData) => {
    updateAddress(data);
    router.push('/checkout/summary');
  }

  const renderTextField = (name: keyof FormData, label: string) => (
    <Grid item xs={12} sm={6}>
      <TextField
        label={label}
        variant="filled"
        fullWidth
        {...register(name, { required: 'Este campo es requerido' })}
        error={!!errors[name]}
        helperText={errors[name]?.message}
      />
    </Grid>
  );

  return (
    <ShopLayout title="Dirección" pageDescription="Confirmar dirección del destino">
      <form onSubmit={handleSubmit(onSubmitAddress)}>
        <Typography variant='h1' component='h1' sx={{ mb: 2 }}> Dirección </Typography>
        <Grid container spacing={2}>
          {renderTextField('firstName', 'Nombre')}
          {renderTextField('lastName', 'Apellido')}
          {renderTextField('email', 'Correo')}
          {renderTextField('phone', 'Teléfono')}
          {renderTextField('address', 'Dirección')}
          {renderTextField('zip', 'Código Postal')}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, mb: 3 }}>
          <Button type="submit" color="secondary" className="circular-btn" size="large">
            Revisar pedido
          </Button>
        </Box>
      </form>
    </ShopLayout>
  );
};

export default AddressPage;
