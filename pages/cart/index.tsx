import { useContext, useEffect } from "react"
import { useRouter } from "next/router"
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material"
import CarList from "@/components/cart/CarList"
import OrderSummary from "@/components/cart/OrderSummary"
import { CartContext } from "@/components/context/indext"
import { ShopLayout } from "@/components/layouts"


const CartPage = () => {


    const { isLoaded, cart } = useContext(CartContext);
    const router = useRouter();

    useEffect(() => {
        if (isLoaded && cart.length === 0) {
            router.replace('/cart/empty');
        }
    }, [isLoaded, cart, router])

    if (!isLoaded || cart.length === 0) {
        return (<></>);

    }
    return (
        <ShopLayout title='Carrito - 3' pageDescription={'Carrito de compras de la tienda'}>
            <Typography variant='h1' component='h1'>
                Carrito de compras
            </Typography>
            <Grid container>
                <Grid item xs={12} sm={7}>
                    <CarList editable />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant="h2">Orden</Typography>
                            <Divider sx={{ my: 1 }} />

                            <OrderSummary />

                            <Box sx={{ mt: 3 }} display='flex' justifyContent='space-between'>


                                <Button
                                    color="secondary"
                                    className='circular-btn'
                                    fullWidth
                                    href='/checkout/address'
                                >
                                    Checkout
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>






        </ShopLayout >

    )
}

export default CartPage
