
import { Box, CircularProgress } from '@mui/material';
import { Loader, Placeholder } from 'rsuite';

const AllLoader = () => {

    return (
        // <div style={{ height: 430, background: '#000' }}>
        //     <Loader inverse center content="loading..." />
        // </div>
        <Box style={{ height: 430, background: '#000' }}>
            <Placeholder.Paragraph rows={8} />
            <Loader backdrop content="loading..." vertical />
        </Box>

    )
}

export default AllLoader
