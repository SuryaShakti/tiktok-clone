import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native'
import Video from 'react-native-video'
import styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';


const Post = (props) => {
    const [post, setPost] = useState(props.post);
    const [paused, setPaused] = useState(false);
    const [isLiked, setIsLiked] = useState(false);


    const onPlayPausePress = () => {
        // console.warn('pauseeeeeee')
        setPaused(!paused);
    }

    const onLikePress = () => {
        const likesToAdd = isLiked ? -1 : 1;
        setPost({
            ...post,
            likes: post.likes + likesToAdd,
        });
        setIsLiked(!isLiked);
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <View>
                    <Video
                        source={{
                            uri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4'
                        }}
                        style={styles.video}
                        resizeMode={'cover'}
                        repeat={true}
                        paused={paused}
                        muted={true}
                    />


                    <View style={styles.uiContainer}>
                        <View style={styles.rightContainer}>
                            <Image
                                style={styles.profilePicture}
                                source={{ uri: 'https://miro.medium.com/fit/c/1360/1360/1*I-rnOsWRz_5WnlXCpV9jJQ.jpeg' }}
                            />

                            <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
                                <AntDesign name={'heart'} size={40} color={isLiked ? 'red' : 'white'} />
                                <Text style={styles.statsLabel}>{'245'}</Text>
                            </TouchableOpacity>

                            <View style={styles.iconContainer}>
                                <FontAwesome name={'commenting'} size={40} color="white" />
                                <Text style={styles.statsLabel}>{'123'}</Text>
                            </View>

                            <View style={styles.iconContainer}>
                                <Fontisto name={'share-a'} size={35} color="white" />
                                <Text style={styles.statsLabel}>{12}</Text>
                            </View>
                        </View>

                        <View style={styles.bottomContainer}>
                            <View>
                                <Text style={styles.handle}>
                                    {'@SuryaShakti'}
                                </Text>
                                <Text style={styles.description} >
                                    {'Description of the post will be dislayed here'}
                                </Text>
                                <View style={styles.songContainer}>
                                    <Entypo style={styles.songIcon} name={'beamed-note'} size={24} color={'white'} />
                                    <Text style={styles.songName}>{'Nf - The Search'}</Text>
                                </View>
                            </View>

                            <Image
                                style={styles.songImage}
                                source={{ uri: 'https://miro.medium.com/fit/c/1360/1360/1*I-rnOsWRz_5WnlXCpV9jJQ.jpeg' }}
                            />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View >
    )
}

export default Post
