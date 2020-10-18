import React from 'react';
import Icon from '@material-ui/core/Icon';
import Textarea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';



class TrelloActionButton extends React.Component {
    
    state = {
        formOpen: false
    }

    openForm = () => {
        this.setState({
            formOpen: true
        });
    };

    closeForm = e => {
        this.setState({
            formOpen: false
        });
    };

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    renderAddButton = () => {
        const { list } = this.props;

        const buttoText = list ? "Add another list" : "Add another card";

        const btnTxtOp = list ? 1 : 0.5;
        const btnTextColor =  list ? "#fff" : "inherit";
        const btnTextBg = list ? "transparent" : "inherit";
        
        
         
        return (
            <div 
            onClick={this.openForm}
            style={{ 
                ...styles.btnOpenGroup,
                opacity: btnTxtOp, 
                color: btnTextColor, 
                backgroundColor: btnTextBg}}>
                <Icon style={styles.icon}>add</Icon>
                <p>{buttoText}</p>   
            </div>
        )


    };

    renderForm = () => {

        const { list } = this.props;

        const placeholder = list ? "Enter list title..." : "Enter a title for this card...";

        const btnTitle = list ? "Add List" : "Add Card";

        return (
            <div>
                <Card style={{
                    overflow: "visible",
                    minHeight: 80,
                    width: "100%",
                    padding: ".5rem",
                    boxSizing: "border-box",
                    marginBottom: ".5rem"
                }}>
                    <Textarea 
                        placeholder={placeholder} 
                        autoFocus 
                        onBlur={this.closeForm} 
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        style={{
                            resize: "none",
                            width: "100%",
                            outline: "none",
                            border: 0,
                        }}
                    />
                </Card>
                <div style={styles.btnFormGroup}>
                    <Button variant="contained" style={{color: "#fff", backgroundColor: "#5aac44"}}>{btnTitle}</Button>
                    <Icon style={{marginLeft: "1rem", cursor: "pointer"}}>close</Icon>
                </div>
            </div>
        );
    };
    
    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    };
}

const styles = {
    btnOpenGroup: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'flex-start',
        cursor: "pointer",
        border: 0,
    },
    icon: { 
        marginRight: ".5rem",
    },
    btnFormGroup: {        
        display: "flex",
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
}

export default TrelloActionButton;