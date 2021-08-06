// import React from 'react';
// import { View, Text } from 'react-native';
// import Post from '../../components/Post';



// const post1 =  {
//     id: 'p3',
//     videoUri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
//     user: {
//       id: 'u1',
//       username: 'User 3',
//       imageUri: 'https://miro.medium.com/fit/c/1360/1360/1*I-rnOsWRz_5WnlXCpV9jJQ.jpeg',
//     },
//     description: 'hahahah oh boy @borat',
//     songName: 'NF - The search',
//     songImage: 'https://cdn.pixabay.com/photo/2013/07/13/12/41/music-160112_1280.png',
//     likes: 123,
//     comments: 12,
//     shares: 44,
//   }

  

// const HomeScreen = () => {
//     return (
//         <View>
//             <Post post={post1} />
//         </View>
//     );
// };

// export default HomeScreen;



import React from 'react';
import { View, Text, FlatList, Dimensions, StatusBar } from 'react-native';
import Post from '../../components/Post';
import posts from '../../../data/posts';

const HomeScreen = () => {
    return (
        <View>
            <FlatList 
                data={posts}
                renderItem= {({item}) => <Post post={item} />}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height - StatusBar.currentHeight}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
            />
        </View>
    );
};

export default HomeScreen;
