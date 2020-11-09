export const bottom = {
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home',
                   
                  }
                },
              ],
              options: {
                bottomTab: {
                  text:'Home',
                  icon: require('../assets/images/home.png'),
                  selectedIconColor : "#0089da",
                  selectedTextColor:"#0089da",
                
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'MyTrip',
                   
                  }
                },
              ],
              options: {
                bottomTab: {
                  text:'My Trips',
                  icon: require('../assets/images/home.png'),
                  selectedIconColor : "#0089da",
                  selectedTextColor:"#0089da",
                
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Offers',
                   
                   
                  }
                }
              ],
              options: {
                bottomTab: {
                  text:'Offers',
                 selectedIconColor : "#0089da",
                  icon: require('../assets/images/kk.jpg'),
                  selectedTextColor:"#0089da",
                 
                }
              }
            },
            
          }
        ]
      }
    }
  };