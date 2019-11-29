import videos from '../assets/videos.json';
import videosMetadata from '../assets/videos_metadata.json';
import Video from '../model/Video';

class VideosProcessor {
  getVideos() {
    let videoInstances = [];
    for (let i = 0; i < videos.length; i++) {
      let video = new Video(
        this.getVideoFile(videos[i]),
        this.getVideoTitle(videos[i])
      );

      this.addMetadataToVideo(video);

      videoInstances.push(video);
    }

    return videoInstances;
  }

  getVideoFile(video) {
    if (typeof video === 'string') {
      return video;
    }

    return video.file;
  }

  getVideoTitle(video) {
    if (typeof video === 'string') {
      return video;
    }

    if (typeof video.title !== 'undefined') {
      return video.title;
    }

    return this.getVideoFile(video);
  }

  /**
   *
   * @param {Video[]} haystack
   * @param {String} needle
   * @returns {Video[]}
   */
  search(haystack, needle) {
    if (!needle) {
      return haystack;
    }

    return haystack.filter(function (video) {
      return video.title.toLowerCase().search(needle.toLowerCase()) !== -1;
    })
  }

  /**
   *
   * @param {Video} video
   */
  addMetadataToVideo(video) {
    for (let i = 0; i < videosMetadata.length; i++) {
      if (typeof videosMetadata[i].file !== 'undefined' && video.file === videosMetadata[i].file) {
        video.title = videosMetadata[i].title;
      }
    }
  }
}

const videosProcessor = new VideosProcessor();

export {videosProcessor as default}
