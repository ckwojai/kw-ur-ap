import { Box, Typography, styled } from '@mui/material';

import Airports from '../Assets/Images/1.jpg';
import InstaTele from '../Assets/Images/2.jpg';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const Welcome = () => {

    return (
        <Header>
            <Typography variant="h4">Get to know the Airports around you !!!</Typography>
            <Box style={{display: 'flex'}}>
                <Image src={Airports} />
                <Image src={InstaTele} />
            </Box>
        </Header>
    )
}

export default Welcome;