import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

const Navbar = ({selectedSub, handleMenuChange, handleRefreshClick}) => (
    <div style={{ margin: '1rem' }}>
        <Menu pointing secondary>
            <Menu.Item name='Gaming' active={selectedSub === 'gaming'} onClick={handleMenuChange} />
            <Menu.Item name='funny' active={selectedSub === 'funny'} onClick={handleMenuChange} />
            <Menu.Item name='pics' active={selectedSub === 'pics'} onClick={handleMenuChange} />
            <Menu.Item name='aww' active={selectedSub === 'aww'} onClick={handleMenuChange} />
            <Menu.Menu position='right'>
                <Menu.Item onClick={() => handleRefreshClick()}><Icon name='refresh' /></Menu.Item>
                <Menu.Item href="http://linkedin.com/in/fnyambati/" target="_blank"><Icon name='linkedin' size="large" /></Menu.Item>
                <Menu.Item href="http://github.com/fnyambati/" target="_blank"><Icon name='github' size="large" /></Menu.Item>
            </Menu.Menu>
        </Menu>
    </div>
)

export default Navbar
