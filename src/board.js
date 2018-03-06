import React, { Component } from 'react'
import Grid from './grid'
import {GRID_SIZE} from './consts'

class Board extends Component {

    renderBaseLayer(){
        let total = this.props.boardSet.row * this.props.boardSet.col;
        const squares = [];
        for( let i=0; i<total; i++ ){
            squares.push(<Grid key={i} style={{
                float: 'left',
            }} />)
        }
        return squares
    }

    renderBlocks(){
        const blocks = [];
        this.props.blocks.map( (el, index) => blocks.push(
            <Grid key={index} type='block' style={{
                position : 'absolute',
                left : ( el[0] - 1 ) * GRID_SIZE + 'px',
                top : ( el[1] - 1 ) * GRID_SIZE + 'px',
            }}/>
        ))

        console.log(blocks)

        return blocks;
    }

    renderMarkers(){
        const markers = [];
        let start = this.props.start;
        let end = this.props.end;
        markers.push(<Grid type='start' style={{
            position : 'absolute',
            left : ( start[0] - 1 ) * GRID_SIZE + 'px',
            top : ( start[1] - 1 ) * GRID_SIZE + 'px',
        }} />)

        markers.push(<Grid type='end' style={{
            position : 'absolute',
            left : ( end[0] - 1 ) * GRID_SIZE + 'px',
            top : ( end[1] - 1 ) * GRID_SIZE + 'px',
        }} />)

        this.props.path.map( (el, index) => markers.push(
            <Grid key={index} type='path' style={{
                position : 'absolute',
                left : ( el[0] - 1 ) * GRID_SIZE + 'px',
                top : ( el[1] - 1 ) * GRID_SIZE + 'px',
            }}/>
        ))

        return markers;
    }

    render(){
        return(
            <div className="board" style={{
                width: this.props.boardSet.col * GRID_SIZE,
                height : this.props.boardSet.row * GRID_SIZE,
                marginLeft : 'auto',
                marginRight : 'auto',
            }}>
                {this.renderBaseLayer()}
                {this.renderBlocks()}
                {this.renderMarkers()}
            </div>
        )
    }
}

export default Board