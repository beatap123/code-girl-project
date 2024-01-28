/**
 * 
 * This script is responsible for the functionality of an image slider.
 * 
 * Variables:
 * - container: The main container for the image slider.
 * - imgs_containers: A collection of all the image containers in the slider.
 * - imgs_count: The total number of images in the slider.
 * - current_img_index: The index of the currently visible image.
 * - autoScroll_enabled: A flag indicating whether automatic scrolling is enabled.
 * - autoScroll_interval: The interval (in milliseconds) at which the slider automatically advances to the next image.
 * - autoScroll_dir: The direction of automatic scrolling (1 for forward, -1 for backward).
 * 
 * Functions:
 * - setup: Initializes the position of each image container based on the width of the main container.
 * - onLeftButton: Shifts the images to the right, making the previous image visible. If the first image is currently visible, it does nothing.
 * - onRightButton: Shifts the images to the left, making the next image visible. If the last image is currently visible, it does nothing.
 * - autoScroll: Automatically advances the slider to the next image at regular intervals, if automatic scrolling is enabled. The direction of scrolling changes when the first or last image becomes visible.
 */

let container=document.getElementById("container");
      let imgs_containers=document.getElementsByClassName("img_container");
      let imgs_count=imgs_containers.length;
      let current_img_index=0;
      let autoScroll_enabled=false;
      let autoScroll_interval=3000;
      let autoScroll_dir=1;
/**
 * The setup function initializes the position of each image container.
 * It calculates the width of the main container and sets the left position
 * of each image container based on its index and the container width.
 * This function should be called initially and whenever the container width changes.
 */
      function setup(){
          let container_width=container.clientWidth;
          for(let i=0;i<imgs_count;i++){
              let element=imgs_containers[i];
              let new_left_pos=container_width*i;
              element.style.left=new_left_pos+"px";
          }
      }
      /**
 * The onLeftButton function is an event handler for the "left" navigation button of the image slider.
 * When invoked, it shifts the images in the slider to the right, making the previous image visible.
 * If the first image is currently visible, the function will wrap around and show the last image.
 * This function should be attached to the click event of the "left" navigation button.
 */

      function onLeftButton(){
          if(current_img_index>0){
              let container_width=container.clientWidth;
              current_img_index--;
              for(let i=0;i<imgs_count;i++){
                  let element=imgs_containers[i];
                  let new_left_pos=container_width*(i-current_img_index);
                  element.style.left=new_left_pos+"px";
              }
          } 
      }
      
      /**
 * The onRightButton function is an event handler for the "right" navigation button of the image slider.
 * When invoked, it shifts the images in the slider to the left, making the next image visible.
 * If the last image is currently visible, the function will wrap around and show the first image.
 * This function should be attached to the click event of the "right" navigation button.
 */
      function onRightButton(){
          if(current_img_index<imgs_count-1){
              let container_width=container.clientWidth;
              current_img_index++;
              for(let i=0;i<imgs_count;i++){
                  let element=imgs_containers[i];
                  let new_left_pos=-container_width*(current_img_index-i);
                  element.style.left=new_left_pos+"px";
              }
          }
      }

      /**
 * The autoScroll function is responsible for automatically scrolling through the images in the slider.
 * It advances the slider to the next image at regular intervals.
 * This function should be called when you want to start the automatic scrolling feature.
 * It's typically used in conjunction with manual navigation buttons for a complete slider functionality.
 */

      function autoScroll(){
          if(!autoScroll_enabled)return;
          if(current_img_index==0)autoScroll_dir=1;
          else if(current_img_index==imgs_count-1)autoScroll_dir=-1;
          if(autoScroll_dir<0){
              let container_width=container.clientWidth;
              current_img_index--;
              for(let i=0;i<imgs_count;i++){
                  let element=imgs_containers[i];
                  let new_left_pos=container_width*(i-current_img_index);
                  element.style.left=new_left_pos+"px";
              }
          }else{
              let container_width=container.clientWidth;
              current_img_index++;
              for(let i=0;i<imgs_count;i++){
                  let element=imgs_containers[i];
                  let new_left_pos=-container_width*(current_img_index-i);
                  element.style.left=new_left_pos+"px";
              }
          }
      }
      setup();
      setInterval(autoScroll,autoScroll_interval);