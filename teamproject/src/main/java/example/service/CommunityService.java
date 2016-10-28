package example.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import example.vo.Community;

public interface CommunityService {
  List<Community> getCommunityList(int pageNo, int length) throws Exception;
  void insertCommunity(Community community, MultipartFile file1, MultipartFile file2, String uploadDir) throws Exception;
  Community getCommunity(int no) throws Exception;
  Community getCommunity(int no, String password) throws Exception;
  int getTotalPage(int pageSize) throws Exception;
  void updateCommunity(Community community) throws Exception;
  void deleteCommunity(int no) throws Exception;
}







