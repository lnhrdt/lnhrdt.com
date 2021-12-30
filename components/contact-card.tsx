import {ComponentType} from 'react'
import {
    Box,
    Card,
    CardContent,
    Grid,
    Link,
    Stack,
    SvgIcon,
    SvgIconProps,
    Tooltip,
    tooltipClasses,
    Typography
} from '@mui/material'
import {Email, GitHub, Instagram, LinkedIn, PhoneAndroid, WhatsApp} from '@mui/icons-material'
import {Signal} from './custom-icons'

export const ContactCard = () => {
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Leonhardt Koepsell
                </Typography>
                <Stack spacing={1}>
                    <Item Icon={PhoneAndroid}
                          title="Mobile"
                          text="+18182136258"
                          href="tel:+18182136258"/>
                    <Item Icon={Signal}
                          title="Signal"
                          text="+18182136258"
                          href="https://signal.me/#p/+18182136258"/>
                    <Item Icon={WhatsApp}
                          title="WhatsApp"
                          text="+18182136258"
                          href="https://wa.me/+18182136258"/>
                    <Item Icon={Email}
                          title="Email"
                          text="hello@lnhrdt.com"
                          href="mailto:hello@lnhrdt.com"/>
                    <Item Icon={Instagram}
                          title="Instagram"
                          text="@peelear"
                          href="https://www.instagram.com/peelear/"/>
                    <Item Icon={LinkedIn}
                          title="LinkedIn"
                          text="leonhardtkoepsell"
                          href="https://www.linkedin.com/in/leonhardtkoepsell"/>
                    <Item Icon={GitHub}
                          title="GitHub"
                          text="@lnhrdt"
                          href="https://github.com/lnhrdt"/>
                </Stack>
            </CardContent>
        </Card>
    )
}

type ItemProps = {
    Icon: ComponentType<SvgIconProps>
    title: string
    text: string
    href: string
}

const Item = ({Icon, title, text, href}: ItemProps) => {
    return (
        <Tooltip title={title} placement="left" componentsProps={{tooltip: {sx: tooltipStyle}}}>
            <Box>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item><Icon color="action"/></Grid>
                    <Grid item><Link href={href} underline="hover" target="_blank" rel="noopener">{text}</Link></Grid>
                </Grid>
            </Box>
        </Tooltip>
    )
}

const tooltipStyle = {
    [`&.${tooltipClasses.tooltip}.${tooltipClasses.tooltipPlacementLeft}`]: {
        marginRight: 0.5,
    },
}
