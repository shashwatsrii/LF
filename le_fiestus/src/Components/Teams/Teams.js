import React, { useState } from "react";
import './Teams.css';
import Stroke from './images/Stroke.png';



function Teams() {

  const [isOpen1, setIsOpen1] = useState(false)

  const onClickEvent1 = () => {
    setIsOpen1(!isOpen1);
  }

  const [isOpen2, setIsOpen2] = useState(false)

  const onClickEvent2 = () => {
    setIsOpen2(!isOpen2);
  }
  const [isOpen3, setIsOpen3] = useState(false)

  const onClickEvent3 = () => {
    setIsOpen3(!isOpen3);
  }



  return (
    <div>
      <div className="teams">
        <div className="teams-name">

          <div className="heading-teams-about">
            <div className="heading-teams-title">Teams</div>
            <div className="stroke-img"><img src={Stroke} alt="" /></div>
          </div>

          <div className="ques-1">
            <div className={`ques-wrapper-1 ${isOpen1 ? 'ques-wrapper-1-active' : ''} `}>

              <div className="ques-heading-teams">

                <div className="ques-heading-teams-titlebox">

                  <div className="ques-heading-teams-m">Publicity & Outreach Team</div>
                  <div onClick={onClickEvent1} className="more-options-m"><div className="more-option-show">+</div><div className="more-option-hide">-</div></div>
                </div>

                <div className="list">
                  <div className="list-item">
                  PR and outreach accountable for publicising the event and reaching out for sponsors and participations
                  </div>



                </div>
              </div>
            </div>

            <div className="ques-2">
              <div className={`ques-wrapper-2 ${isOpen2 ? 'ques-wrapper-2-active' : ''} `}>

                <div className="ques-heading-teams">
                  <div className="ques-heading-teams-titlebox">

                    <div className="ques-heading-teams-m">Technical Team</div>
                    <div onClick={onClickEvent2} className="more-options-m"><div className="more-option-show">+</div><div className="more-option-hide">-</div></div>
                  </div>

                  {<div className="list">
                    <div className="list-item">
                    Technical committee is responsible for the smooth working of all the technical aspects like photography during the event, making of posters and website etc.
                    </div>


                  </div>
                  }
                </div>
              </div>
            </div>

            <div className="ques-3">
              <div className={`ques-wrapper-3 ${isOpen3 ? 'ques-wrapper-3-active' : ''} `}>

                <div className="ques-heading-teams">
                  <div className="ques-heading-teams-titlebox">

                    <div className="ques-heading-teams-m">Event Management Team</div>
                    <div onClick={onClickEvent3} className="more-options-m"><div className="more-option-show">+</div><div className="more-option-hide">-</div></div>
                  </div>

                  <div className="list">
                    <div className="list-item">
                      Event and management ensure the proper management of the event and ensure the smooth functioning of various sub-events organised during LF
                    </div>


                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}



export default Teams


