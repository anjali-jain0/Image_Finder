import React from 'react';
import  {GridTile,GridList} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export class ImageResults extends React.Component {
  
  constructor(){
    super();
    this.state={
        open:false,
        currentImg:''
    }
  }
  
  handleOpen= img => {
    this.setState({open:true,currentImg:img});
  }

  handleClose(){
    this.setState({ open:false });
  }

  render() {

    let x= (
            <GridList cols={3}>

                {this.props.images.map((img) => (
                    <GridTile title={img.tags} key={img.id} subtitle={<span> by <strong>{img.user}</strong></span>} actionIcon={<IconButton onClick={() => this.handleOpen(img.largeImageURL)} ><ZoomIn color="white" /> </IconButton>} > 
                    <img src={img.largeImageURL} alt='' />
                    </GridTile>
                ))}

            </GridList>
            );
    
    const actions = [
    <FlatButton label='Close' primary={true} onClick={this.handleClose.bind(this)} /> 
    ]; 


    return (
        <div>
            {x}
            <Dialog actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose.bind(this)} >
            <img src={this.state.currentImg} alt="" style={{width:'100%'}} />
            </Dialog>
        </div>
    
    );
  }
};

