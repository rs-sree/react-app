import React from 'react';

import Hoc from '../../hoc/Hoc';
import classes from './Layout.css'


const layout = ( props ) => (
    <Hoc>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className = {classes.Content}>
            {props.children}
        </main>
    </Hoc>
);

export default layout;
