import React from "react";

class MembersInfo extends React.Component{

    render(){
        const { name, description, img} = this.props;
        return (
            <div className="membersContainer">
                <div className="membersImage">
                IMAGE
                </div>
                <div className="membersInfo">
                    NAME<ul/>
                    DESCRIPTION
                </div>
                
            </div>


        )
    }

}

export default MembersInfo;