import React, { Component } from 'react';
import { Text, View, Image, FlatList, TouchableHighlight, AsyncStorage } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { formatDate } from '../../assets/js/utils'
import styles from '../../assets/style/common'

export default class ListScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
        this.params = {
            tab: 'all',
            page: 1,
            limit: 15,
        }
        this.tabs = [
            { key: 'all', name: '全部' },
            { key: 'good', name: '精华' },
            { key: 'share', name: '分享' },
            { key: 'ask', name: '问答' },
            { key: 'dev', name: '灌水' }
        ]
        this.isLoadingMore = false;
        this.loading = false;
    }

    componentDidMount() {
        this.getList()
    }

    getList = () => {
        if (this.isLoadingMore) return false;

        this.isLoadingMore = true;
        this.loading = true;

        fetch(`https://cnodejs.org/api/v1/topics?tab=${this.params.tab}&page=${this.params.page}&limit=${this.params.limit}`)
            .then((response) => {
                return response.json();
            })
            .then((res) => {

                this.setState({
                    data: [...this.state.data, ...res.data]
                }, () => {
                    this.isLoadingMore = false;
                    this.loading = false;
                })

            });
    }

    _keyExtractor = (item, index) => item.id;

    _itemSeparatorComponent = () => {
        return <View style={styles.itemLine} />;
    }

    _endReached = () => {
        ++this.params.page

        this.getList()
    }

    switchTab = (type) => {
        this.params.tab = type
        this.params.page = 1
        this.loading = true

        this.setState({
            data: []
        }, () => {
            this.getList()
        })
    }

    _ListHeaderComponent = () => {
        let { tab } = this.params

        return (
            <View>
                <View style={{ flex: 1 }}>
                    <Spinner visible={this.loading} textStyle={{ color: '#FFF' }} />
                </View>
                <View style={[styles.flex, styles.navWrap]}>
                    {
                        this.tabs.map(item => {
                            return (
                                <TouchableHighlight key={item.key} underlayColor={'#38d8dc'} style={[styles.flex, styles.flexCenter, styles.nav, tab === item.key ? styles.active : '']} onPress={() => { this.switchTab(item.key) }}>
                                    <Text style={styles.white}>{item.name}</Text>
                                </TouchableHighlight>
                            )
                        })
                    }
                </View>
            </View>
        )
    }

    _renderItem = ({ item, index }) => {
        return (
            <View style={[styles.flex, styles.itemWrap]}>
                <Image source={{ uri: item.author.avatar_url }} style={styles.itemPic}></Image>
                <View style={styles.itemRight}>
                    <Text>
                        {item.top ? <Text style={{ color: 'blue' }}>[顶]</Text> : ''}
                        {item.good ? <Text style={{ color: 'red' }}>[精]</Text> : ''}
                        {item.title}
                    </Text>
                    <View style={[styles.flex, styles.itemCount]}>
                        <Text>{item.reply_count}/{item.visit_count}分享</Text>
                        <Text>{formatDate(item.create_at)}</Text>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        return (
            <FlatList
                data={this.state.data}
                ListHeaderComponent={this._ListHeaderComponent}
                ItemSeparatorComponent={this._itemSeparatorComponent}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                onEndReachedThreshold={0.5}
                onEndReached={this._endReached}
            />
        );
    }
}
