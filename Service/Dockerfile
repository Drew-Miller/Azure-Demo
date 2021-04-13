FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build

ARG configuration=Debug

WORKDIR /src
COPY ["./Data/Data.csproj", "Data/"]
RUN dotnet restore "Data/Data.csproj"
COPY ["Data/.", "Data/"]

COPY ["./Service/Service.csproj", "Service/"]
RUN dotnet restore "Service/Service.csproj"
COPY ["Service/.", "Service/"]

WORKDIR "/src/Data"
RUN dotnet build "Data.csproj" -o /app/build

WORKDIR "/src/Service"
RUN dotnet build "Service.csproj" -c $configuration -o /app/build
RUN dotnet publish "Service.csproj" -c $configuration -o /app/publish

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS final
WORKDIR /app
EXPOSE 80
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "Service.dll"]