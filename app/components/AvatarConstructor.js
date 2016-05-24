'use strict';

import React from 'react';
import Paper from 'material-ui/Paper';
import NavigationBar from './NavigationBar';
import Canvas from './Canvas/Canvas';
import ComponentsGrid from './ComponentsGrid/ComponentsGrid';

const styles = {
    div:{
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	padding: 20,
	width: '100%'
    },
    paperLeft:{
	flex: 1,
	height: 600,
	margin: 10,
	textAlign: 'center',
	padding: 10
    },
    paperRight:{
	height: 600,
	flex: 3,
	margin: 10,
	padding: 10,
	textAlign: 'center'
    }
};

export default class AvatarConstructor extends React.Component{
    render(){
	return (
	    <div>
		<NavigationBar />
		<div style={styles.div}>
		    <Paper style={styles.paperLeft}>
			<Canvas />
		    </Paper>
		    <Paper style={styles.paperRight}>
			<ComponentsGrid />
		    </Paper>
		</div>
	    </div>


	)
    }
}