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

const Signal = (props: SvgIconProps) => (
    <SvgIcon {...props}>
        <path d="M9.59926 2.29194L9.82371 3.20109C8.93909 3.41973 8.09243 3.77027 7.31217 4.24094L6.83202 3.43691C7.69087 2.9168 8.62401 2.5307 9.59926 2.29194V2.29194ZM14.4007 2.29194L14.1763 3.20109C15.0609 3.41973 15.9076 3.77027 16.6878 4.24094L17.1737 3.43691C16.3126 2.91725 15.3776 2.53121 14.4007 2.29194V2.29194ZM3.43689 6.82921C2.91727 7.68932 2.53121 8.62332 2.29192 9.5993L3.20108 9.82375C3.41971 8.93913 3.77025 8.09246 4.24092 7.3122L3.43689 6.82921ZM2.93685 12C2.93679 11.5454 2.97098 11.0915 3.03914 10.642L2.11293 10.4999C1.96236 11.4934 1.96236 12.5039 2.11293 13.4973L3.03914 13.3581C2.97108 12.9086 2.93689 12.4547 2.93685 12V12ZM17.168 20.5603L16.6878 19.7592C15.9088 20.2303 15.063 20.5808 14.1791 20.799L14.4036 21.7082C15.3776 21.4671 16.3096 21.0801 17.168 20.5603ZM21.0631 12C21.0631 12.4547 21.0289 12.9086 20.9609 13.3581L21.8871 13.4973C22.0376 12.5039 22.0376 11.4934 21.8871 10.4999L20.9609 10.642C21.029 11.0915 21.0632 11.5454 21.0631 12V12ZM21.7081 14.398L20.7989 14.1735C20.5808 15.0592 20.2302 15.9069 19.7591 16.6879L20.5631 17.1709C21.0832 16.31 21.4693 15.375 21.7081 14.398V14.398ZM13.3581 20.9609C12.4578 21.0973 11.5422 21.0973 10.6419 20.9609L10.5027 21.8872C11.4952 22.0377 12.5048 22.0377 13.4973 21.8872L13.3581 20.9609ZM19.296 17.3755C18.756 18.1077 18.1085 18.7543 17.3754 19.2932L17.9322 20.0489C18.7397 19.4545 19.454 18.7431 20.0517 17.938L19.296 17.3755ZM17.3754 4.70405C18.1085 5.24401 18.756 5.89149 19.296 6.62465L20.0517 6.0621C19.4562 5.25631 18.7437 4.54387 17.9379 3.94831L17.3754 4.70405ZM4.70403 6.62465C5.24398 5.89149 5.89147 5.24401 6.62462 4.70405L6.06208 3.94831C5.25629 4.54387 4.54385 5.25631 3.94829 6.0621L4.70403 6.62465ZM20.5631 6.82921L19.7591 7.3122C20.2302 8.09123 20.5808 8.93703 20.7989 9.82091L21.7081 9.59646C21.4688 8.62138 21.0827 7.68832 20.5631 6.82921V6.82921ZM10.6419 3.03915C11.5422 2.90276 12.4578 2.90276 13.3581 3.03915L13.4973 2.11295C12.5048 1.96235 11.4952 1.96235 10.5027 2.11295L10.6419 3.03915ZM5.18417 20.299L3.24938 20.7479L3.70111 18.8131L2.78912 18.6L2.33738 20.5348C2.30912 20.6547 2.30478 20.7791 2.32462 20.9007C2.34445 21.0224 2.38808 21.1389 2.45299 21.2436C2.5179 21.3484 2.60283 21.4393 2.70292 21.5112C2.80301 21.5831 2.9163 21.6346 3.03629 21.6627C3.17663 21.694 3.32212 21.694 3.46246 21.6627L5.39726 21.2166L5.18417 20.299ZM2.98231 17.7647L3.89715 17.9749L4.20967 16.6339C3.75329 15.8684 3.41336 15.0391 3.20108 14.1735L2.29192 14.398C2.49642 15.2265 2.80576 16.0257 3.21244 16.776L2.98231 17.7647ZM7.35762 19.7932L6.01662 20.1058L6.2297 21.0206L7.21557 20.7905C7.96532 21.1984 8.76459 21.5078 9.59358 21.711L9.81803 20.8018C8.9551 20.5868 8.12882 20.245 7.36615 19.7876L7.35762 19.7932ZM12 3.87444C7.51104 3.87728 3.87726 7.51676 3.87726 12.0029C3.87974 13.5309 4.31194 15.0274 5.12451 16.3214L4.3432 19.6569L7.67583 18.8756C11.4744 21.2649 16.4918 20.1257 18.8812 16.3299C21.2705 12.5342 20.1341 7.51676 16.3384 5.12453C15.0389 4.30737 13.535 3.87403 12 3.87444"/>
    </SvgIcon>
)

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
                <Link href={href} underline="hover" target="_blank" rel="noopener">
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item><Icon color="action"/></Grid>
                        <Grid item>{text}</Grid>
                    </Grid>
                </Link>
            </Box>
        </Tooltip>
    )
}

const tooltipStyle = {
    [`&.${tooltipClasses.tooltip}.${tooltipClasses.tooltipPlacementLeft}`]: {
        marginRight: 0.5,
    },
}
