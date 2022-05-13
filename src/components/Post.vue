<template>
  <div class="post">
    <!-- header -->
    <header class="header section">
      <div class="header-author">
        <Avatar size="40" />
        <div class="header-author-info">
          <div>
            <CustomText tag="b">ertyeni</CustomText>
          </div>
          <div>
            <CustomText size="xsmal">Sinop - Merkez</CustomText>
          </div>
        </div>
      </div>
      <div class="header-more">
        <button type="button">
          <IconMore />
        </button>
      </div>
    </header>

    <!-- media -->
    <div class="post-media">
      <img :src="mediaUrl" :alt="mediaAlt" />
    </div>

    <!-- actions -->
    <div class="action-buttons section">
      <button type="button">
        <IconLike />
      </button>
      <button type="button">
        <IconComment />
      </button>
      <button type="button">
        <IconDirect />
      </button>
      <button class="action-save" type="button">
        <IconSave />
      </button>
    </div>

    <!-- view count -->
    <div class="view-count section">
      <custom-text tag="b"> 1.057 beğenme</custom-text>
    </div>
    
    <!-- comment list -->

    <!-- datetime -->

    <!-- comment -->
  </div>
</template>
<script>
import Avatar from "./Avatar.vue";
import CustomText from "./CustomText.vue";
import IconMore from "@/icons/more.svg";
import IconLike from "@/icons/like.svg";
import IconComment from "@/icons/comment.svg";
import IconDirect from "@/icons/direct.svg";
import IconSave from "@/icons/save.svg";

export default {
  name: "Post",
  props: {
    mediaUrl: {
      type: String,
      default:
        "https://www.insansepeti.com/wp-content/uploads/2020/10/instagram-1.jpg",
    },
    mediaAlt: {
      type: String,
      default: "instagram-1",
    },
  },
  components: {
    Avatar,
    CustomText,
    IconMore,
    IconLike,
    IconComment,
    IconDirect,
    IconSave,
  },
};
</script>

<style>
.post {
  border-radius: 3px;
  border: 1px solid rgb(var(--b6a));
}
.section {
  padding-left: 16px;
  padding-right: 16px;
}
.header {
  height: 60px;
  display: flex;
  align-items: center;
}

.header-author {
  display: flex;
  align-items: center;
}
.header-author-info {
  margin-left: 16px;
}
.header-more {
  margin-left: auto;
}

.action-buttons {
  height: 45px;
  display: flex;
  align-items: center;
}

.action-buttons button {
  margin-right: 16px;
}

.action-save {
  margin-left: auto;
  margin-right: 0px;
}
.view-count {
}
</style>
