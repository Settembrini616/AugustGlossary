import React, { useEffect, useContext, useState } from 'react';
import AppMainContext from '../../AppMainContext';
import { Cross } from '../../../FontAwesome/FontAwesome';
import { useClose } from '../../CustomHooks';



const TrackBarModal = ({dayDescription, children, UsernameLogin}) => {



 const {trackHistoryState, setTrackHistoryState } = 
 useContext(AppMainContext);


 const [isClosingHistory, closeTheWindow] = 
 useClose(trackHistoryState, setTrackHistoryState );

    return (

        <div className={trackHistoryState ? 'open-modal' : 'close-modal'}>
         <div className=
         {isClosingHistory ? 'blur-background blurclose' : 'blur-background'}>

         </div>

        <div className={isClosingHistory ? 'main-track-close' : 'main-track-open'}>

            <div className="inner-modal">

                    <div className="top-wrapper">
                    <h4>Your success history</h4>   
                    
                    <Cross
                    className='crossy'
                    onClick={closeTheWindow}
                    />
                    </div>

                    <aside> 
                        <div>
                        <h6>Hello, {UsernameLogin}!</h6>
                            <p>
                                This is your latest study description:
                            </p>
                            <p className='daydescr'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta fuga, earum amet harum iste, repellat cumque doloribus provident expedita architecto enim excepturi at vel distinctio numquam odit quam dignissimos autem.
                                Odio placeat obcaecati blanditiis sit qui deserunt aliquid ipsa, cumque perspiciatis doloribus vel, pariatur, sunt voluptatem sapiente. Illo, quo dolorum, recusandae facere eos, explicabo quod excepturi nisi earum cumque dolore!
                                Eveniet obcaecati facilis, velit, totam repellat numquam rem praesentium tenetur quo dicta suscipit quae dolor eum officiis commodi nihil perspiciatis a aliquam. Aut cupiditate quibusdam modi eius laudantium obcaecati saepe?
                                Vero pariatur architecto error ab ea. Iure, alias quaerat. Itaque quos culpa veniam, maiores, dolore nulla tenetur eum ab animi, libero neque aperiam quas obcaecati cupiditate inventore sed! Iure, quidem!
                                Esse sed ex accusantium dolor mollitia doloremque eveniet rem fuga reiciendis corrupti voluptatum maiores deserunt, id, dolore voluptatem. Ea aliquam odit laudantium voluptates iste recusandae itaque tempore voluptatum assumenda hic!
                                Reiciendis, itaque ipsa! Nam aut ipsum laudantium, deserunt cumque recusandae, fuga reiciendis error quo, officiis veritatis corporis perferendis esse asperiores. Hic voluptatibus eligendi ut dolores sit illo nam accusantium. Ab.
                                Ullam sed voluptatem mollitia perferendis, necessitatibus modi sapiente praesentium nulla voluptatibus doloremque cumque commodi perspiciatis architecto, amet eos et explicabo non? Tempore, veniam quam obcaecati consectetur placeat modi omnis totam.
                                Eaque, repellat et. Aliquid enim placeat beatae nostrum iste, ratione illo voluptas natus, harum repudiandae rem, libero neque commodi dignissimos itaque voluptates! A ducimus, quam nulla eveniet blanditiis qui quaerat.
                                Vitae ut asperiores molestias a, aperiam eligendi repudiandae explicabo, iste nemo atque iusto voluptate dicta illo nobis veritatis esse amet reprehenderit commodi totam numquam alias blanditiis dolores magnam? Illo, eius.
                                Cum reiciendis molestiae modi eum. Soluta quas consequatur, ut aspernatur dolor velit possimus fugiat et laboriosam nam suscipit. Doloribus temporibus sint fuga iusto asperiores quod, voluptatibus at inventore dolor nostrum?
                                Quis quia pariatur eius sed reprehenderit vel aliquid illo voluptatum impedit tempora voluptas repellat sint fugit beatae, nesciunt eligendi aspernatur sequi rem, labore expedita? At est expedita nam quibusdam facilis.
                                Eius commodi itaque ad corrupti eligendi maxime, optio tempora voluptatibus odio sequi ipsa eaque possimus, earum a modi quia exercitationem corporis tenetur veniam nisi. Voluptates quasi aperiam veritatis sapiente facilis?
                                Omnis quasi dolore ab molestias harum mollitia fugit incidunt? Maxime sequi dignissimos laboriosam eveniet dolores voluptates itaque. Non, molestias. Sapiente a quo illo molestiae? Voluptatum quaerat dignissimos accusantium vero ullam.
                                Commodi et, eum nam soluta nemo dolorem veritatis tempore dolore odit animi accusantium cupiditate, consequatur cum nihil placeat provident nisi aspernatur culpa aut quos magnam. Voluptates odio cupiditate quis incidunt.
                                Doloremque deleniti rem animi similique quidem beatae aperiam aliquid debitis! In obcaecati temporibus repudiandae laborum tenetur, quo nihil consequuntur consectetur ad! Rem itaque aut aspernatur non animi neque cupiditate distinctio.
                                Provident cupiditate perspiciatis praesentium obcaecati hic consequuntur sequi adipisci quia tempora voluptatem, dolorem deleniti in, sit debitis aut tenetur similique et, ex natus asperiores! Officia praesentium vel magni esse totam!
                                Illum totam illo voluptatum nobis perferendis quibusdam et recusandae at incidunt, facere velit dolore, distinctio doloremque mollitia facilis nihil modi qui iusto nulla amet vel itaque delectus dolorum. Odit, harum.
                                Doloremque facilis voluptate architecto nisi praesentium ut et fugiat deleniti molestiae accusantium exercitationem, itaque expedita aperiam incidunt consequuntur, consectetur maiores quo ratione eum nostrum dicta! Aliquam, tempore? Odit, numquam? Ex.
                                Iure eaque veniam iste aliquam at quas architecto vel assumenda molestias beatae enim ratione non corrupti inventore praesentium maxime dignissimos eum, illum tempore doloremque delectus! Eius distinctio nulla debitis est.
                                Inventore accusamus quaerat amet reprehenderit esse quia aspernatur magnam laudantium enim, suscipit voluptatibus, illo libero ducimus eos eum voluptatem dolor dolores eaque. Quas tenetur repellendus quidem est quisquam porro fugit.
                                Provident ad, praesentium veniam nesciunt amet harum laborum rerum animi natus inventore quam ullam asperiores, hic magni est tempore consectetur sed cum excepturi. Qui deleniti architecto doloribus nostrum vel saepe?
                                Voluptatum voluptate excepturi maxime mollitia dolorem aliquam tempore natus! Minus reprehenderit id sapiente cupiditate quo repellat perspiciatis tenetur labore saepe deserunt blanditiis vel, aspernatur porro cumque? Atque dicta iusto modi.
                                Deserunt inventore excepturi suscipit, dolore hic blanditiis nostrum eligendi recusandae ipsa quasi velit doloribus possimus repudiandae repellendus explicabo mollitia harum, voluptas ad similique illo. Dolores error repellendus quam mollitia similique?
                                Eius aspernatur ullam quasi nostrum laudantium exercitationem error explicabo! Voluptates doloribus adipisci quibusdam. Provident sint porro animi et error iure quidem aliquid doloribus accusantium. Impedit dolores consectetur veritatis tempora sequi!
                                Distinctio laboriosam minus excepturi, asperiores laborum nulla quidem neque earum, necessitatibus veniam eveniet aspernatur, doloremque quae aliquid dolorum iusto ducimus recusandae eos quis amet nisi animi? Incidunt repellendus quae ut!
                                Tempore, ad? Obcaecati laborum, ut at illum aliquam, error vel suscipit architecto eligendi nobis voluptatibus unde ullam quidem similique quos soluta numquam beatae! Ex eveniet libero sequi tempora! Autem, necessitatibus.
                                At amet doloremque doloribus cum cupiditate molestias illum soluta! Reiciendis enim itaque debitis veniam, deleniti totam natus perferendis est fuga aliquam nesciunt cum eaque eveniet facilis eius. Suscipit, distinctio quis.
                                Animi, aliquid vero mollitia eveniet molestias consectetur repudiandae facilis aspernatur velit, quaerat excepturi doloribus assumenda! Unde quisquam obcaecati dolorum odio veritatis alias, aperiam porro optio, ea dolorem magni rem vel.
                                Distinctio ipsum labore reiciendis quas iste provident nostrum cupiditate ex tempora laboriosam! Atque veritatis natus porro? Alias nulla eligendi fugit sequi amet laudantium quisquam! Asperiores illo ex ab dolore voluptas?
                                Expedita non distinctio earum quos totam, odio magnam tempora doloribus assumenda consequuntur sit itaque commodi velit nulla modi voluptatibus hic cumque praesentium esse temporibus deserunt. Magni dolor sequi rem beatae.
                                Est, ad dolor nostrum temporibus porro explicabo sint, eos quis, ea tempora omnis error sit modi! Sit quam eos quae obcaecati est aut facere voluptate dolore quasi, aliquam, molestiae velit.
                                Asperiores nobis velit doloremque, aperiam maxime autem accusantium quas amet officiis, placeat inventore porro sapiente repellendus ex perspiciatis eius fugit, aliquam incidunt. Dolore tenetur aliquid, aspernatur quae magni neque ipsum.
                                {dayDescription}
                            </p>
                        </div>
                       
                    </aside>
                    <aside> 
                        <div 
                          className='inner-modal-'>
                            <h6>Look it up:</h6>
                            <ul>
                                {children}
                            </ul>
                        </div>
                        
                    </aside>

            </div>

        </div>
        </div>
    );
}

export default TrackBarModal;
